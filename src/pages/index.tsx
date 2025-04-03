import { CommunityKitForm } from "@/components/community-kit-form";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Community Kit Generator</title>
        <meta name="description" content="Easily generate your community kit for GDG and other developer programs." />
        <meta name="author" content="Praveen Thirumurugan" />
        <meta property="og:title" content="Community Kit Generator" />
        <meta property="og:description" content="Easily generate your community kit for GDG and other developer programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdg.praveent.com" />
        <meta property="og:image" content="https://gdg.praveent.com/illustrations/og.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Community Kit Generator" />
      </Head>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <CommunityKitForm />
        </div>
      </div>
    </>
  );
}
