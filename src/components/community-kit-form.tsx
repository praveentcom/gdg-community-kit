import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Turnstile } from "next-turnstile";

export function CommunityKitForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fullName = (e.target as HTMLFormElement).fullName.value;
    const email = (e.target as HTMLFormElement).email.value;
    const location = (e.target as HTMLFormElement).location.value;
    const communityType = (e.target as HTMLFormElement).communityType.value;
    const token = (e.target as HTMLFormElement)["cf-turnstile-response"].value;

    if (turnstileStatus !== "success" || !token) {
      toast.warning("Please verify the security check");
      return;
    }

    if (fullName.length < 2) {
      toast.warning("Please enter a valid name");
      return;
    }
    if (fullName.length > 50) {
      toast.warning("Name is too long");
      return;
    }

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      toast.warning("Please enter a valid email address");
      return;
    }

    const isValidLocation = location.length > 2 && location.length < 50;
    if (!isValidLocation) {
      toast.warning("Please enter a valid location");
      return;
    }

    setIsLoading(true);

    await axios
      .post("/api/accept-request", {
        location,
        fullName,
        email,
        communityType,
        token,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(
            `${`${fullName}`.split(" ")[0]}, we're generating your kit. You'll receive an email once it's generated.`,
            {
              duration: 20000,
            },
          );
        } else if (res.status === 429) {
          toast.warning("Rate limit exceeded. Try again in after an hour.");
        } else {
          toast.warning("Failed to generate image, please try later.");
        }
      })
      .catch((error) => {
        toast.warning("Failed to generate image - " + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-xl font-bold">Howdy, organiser!</h1>
                <p className="text-md text-muted-foreground text-balance">
                  Let&apos;s generate your community kit
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1.5">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Organiser Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="mail@praveent.com"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="communityType">Community Type</Label>
                  <Select defaultValue="gdg" name="communityType">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Community Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Programs</SelectLabel>
                        <SelectItem value="gdg">
                          GDG (Google Developer Group)
                        </SelectItem>
                        <SelectItem value="gdg-cloud">GDG Cloud</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="location">Community Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="New Delhi"
                    required
                  />
                  <Label
                    className="text-xs font-normal text-muted-foreground"
                    htmlFor="location"
                  >
                    Only the location name, e.g. New Delhi, London, etc.
                    Don&apos;t add GDG before the location name.
                  </Label>
                </div>
                <div className="grid">
                  <Turnstile
                    siteKey={
                      process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!
                    }
                    retry="auto"
                    theme="light"
                    size="normal"
                    refreshExpired="auto"
                    sandbox={process.env.NODE_ENV === "development"}
                    onError={() => {
                      setTurnstileStatus("error");
                      toast.error("Security check failed. Please try again.");
                    }}
                    onExpire={() => {
                      setTurnstileStatus("expired");
                      toast.error(
                        "Security check expired. Please verify again.",
                      );
                    }}
                    onLoad={() => {
                      setTurnstileStatus("required");
                    }}
                    onVerify={() => {
                      setTurnstileStatus("success");
                    }}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : null}
                  {isLoading ? "Just a moment..." : "Generate"}
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Have praises or suggestions?
                </span>
              </div>
              <div className="grid gap-2">
                <div className="text-center text-sm">
                  Found the tool useful?{" "}
                  <a
                    href="https://github.com/praveentcom/gdg-community-kit"
                    className="underline underline-offset-4"
                    target="_blank"
                  >
                    Give a star on GitHub
                  </a>
                </div>
                <div className="text-center text-sm">
                  Not working as expected?{" "}
                  <a
                    href="mailto:mail@praveent.com"
                    className="underline underline-offset-4"
                    target="_blank"
                  >
                    Report an issue
                  </a>
                </div>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/images/illustrations/gdg_sticker.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Always refer to the community guidelines slides shared by the DevRel
        team for guidance on how to use this community kit. Feel free to tweak
        it based on your event needs and plans.<br></br>
        <br></br>
        The kit might not reflect the latest updates.<br></br>
        Last updated on 1st April 2025.
      </div>
    </div>
  );
}
