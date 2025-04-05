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
import { CldUploadWidget } from "next-cloudinary";

export function CommunityKitForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fullName = (e.target as HTMLFormElement).fullName.value;
    const email = (e.target as HTMLFormElement).email.value;
    const location = (e.target as HTMLFormElement).location.value;
    const communityType = (e.target as HTMLFormElement).communityType.value;
    const token = (e.target as HTMLFormElement)["cf-turnstile-response"].value;

    const regExpForTestKeywords = /(test|example|demo|sample|check)/i;
    const isTestKeywordPresent =
      regExpForTestKeywords.test(fullName) ||
      regExpForTestKeywords.test(email) ||
      regExpForTestKeywords.test(location);
    if (isTestKeywordPresent) {
      const confirmIfValid = confirm(
        "We found that you used test keywords in the form, likely used to test the flow. If the details are valid, please click OK. Otherwise, please click Cancel and enter valid details.",
      );
      if (confirmIfValid === false) {
        toast.info(
          "Thanks for your feedback. Please enter valid details and submit again.",
        );
        return;
      }
    }

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
      .post(
        process.env.NEXT_PUBLIC_GENERATE_REQUEST_API_URL ??
          `/api/generate-request`,
        {
          location,
          fullName,
          email,
          communityType,
          token,
          customImageUrl,
        },
      )
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
        <CardContent className="grid p-0">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/illustrations/kit_banner.png"
            />
            <img
              src="/images/illustrations/kit_banner_large.png"
              alt="Community Kit"
              className="w-full h-auto"
            />
          </picture>
          <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <div className="flex flex-col gap-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-1.5 h-min">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid gap-1.5 h-min">
                  <Label htmlFor="email">Organiser Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="mail@praveent.com"
                    required
                  />
                </div>
                <div className="grid gap-1.5 h-min">
                  <Label htmlFor="communityType">Program Type</Label>
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
                <div className="grid gap-1.5 h-min">
                  <Label htmlFor="location">Community Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="New Delhi"
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="imageUpload">Event Photo (Optional)</Label>
                  <CldUploadWidget
                    uploadPreset="gdg-community-kit"
                    onSuccess={(result) => {
                      if (
                        result.event === "success" &&
                        typeof result.info === "object" &&
                        "url" in result.info
                      ) {
                        const customImageUrl = result.info.url;
                        setCustomImageUrl(customImageUrl);

                        toast.success("Image uploaded successfully");
                      }
                    }}
                    onAbort={() => {
                      toast.error("Image upload aborted");
                    }}
                    onError={() => {
                      toast.error("Image upload failed");
                    }}
                    options={{
                      maxFiles: 1,
                      maxFileSize: 10 * 1024 * 1024,
                      clientAllowedFormats: ["png", "jpg", "jpeg"],
                      sources: ["local", "url"],
                      showAdvancedOptions: false,
                      cropping: true,
                      multiple: false,
                      defaultSource: "local",
                      croppingAspectRatio: 16 / 9,
                    }}
                  >
                    {({ open }) => (
                      <div
                        className="rounded-md border-dashed border border-muted-foreground/25 hover:border-muted-foreground/50 flex items-center justify-center p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                        onClick={() => open()}
                      >
                        {customImageUrl ? (
                          <img
                            src={customImageUrl}
                            alt="Uploaded"
                            className="w-full h-auto rounded-md"
                          />
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            Click to upload an image
                          </p>
                        )}
                      </div>
                    )}
                  </CldUploadWidget>
                  <Label className="text-xs text-muted-foreground font-normal">
                    This image will be used within the branding kit images (like
                    the cover image you see in this page with the event photo
                    inside).
                  </Label>
                </div>
              </div>
              <div className="grid gap-0 md:w-max">
                <Turnstile
                  siteKey={
                    process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!
                  }
                  retry="auto"
                  theme="light"
                  refreshExpired="auto"
                  sandbox={process.env.NODE_ENV === "development"}
                  onError={() => {
                    setTurnstileStatus("error");
                    toast.error("Security check failed. Please try again.");
                  }}
                  onExpire={() => {
                    setTurnstileStatus("expired");
                    toast.error("Security check expired. Please verify again.");
                  }}
                  onLoad={() => {
                    setTurnstileStatus("required");
                  }}
                  onVerify={() => {
                    setTurnstileStatus("success");
                  }}
                  className="w-full"
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : null}
                  {isLoading ? "Just a moment..." : "Generate"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Always refer to the community guidelines slides shared by the DevRel
        team for guidance on how to use this community kit. Feel free to tweak
        it based on your event needs and plans.<br></br>
        <br></br>
        Last updated on 1st April 2025.<br></br>
        <div className="text-center text-xs">
          Found the tool useful?{" "}
          <a
            href="https://github.com/praveentcom/gdg-community-kit"
            className="underline underline-offset-4"
            target="_blank"
          >
            Give a star on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
