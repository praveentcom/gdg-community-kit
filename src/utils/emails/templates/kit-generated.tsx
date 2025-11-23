import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import moment from "moment";
import {
  EMAIL_MAIN,
  EMAIL_CONTAINER,
  EMAIL_BOX,
  EMAIL_HR,
  EMAIL_PARAGRAPH,
  EMAIL_BUTTON,
  EMAIL_ANCHOR,
  EMAIL_FOOTER,
} from "../constants";

export const EMAIL_KIT_GENERATED_HTML = ({
  fullName,
  communityName,
  signedUrl,
  requestDate,
}: {
  fullName: string;
  communityName: string;
  signedUrl: string;
  requestDate: Date;
}) => (
  <Html>
    <Head />
    <Body style={EMAIL_MAIN}>
      <Preview>
        Woohoo, the kit for {communityName} is generated successfully. Download the kit{" "}
        using the attached link. The link will remain valid for 30 days.
      </Preview>
      <Container style={EMAIL_CONTAINER}>
        <Section style={EMAIL_BOX}>
          <Img
            src={`${process.env.BASE_URL}/favicon.png`}
            width="36px"
            height="36px"
            alt="Logo"
          />
          <Hr style={EMAIL_HR} />
          <Text style={EMAIL_PARAGRAPH}>
            Hey {fullName},
          </Text>
          <Text style={EMAIL_PARAGRAPH}>
            Thanks for using the tool to generate the branding{" "}
            assets for {communityName}. The community kit is generated and I{" "}
            hope you and your audience will love them.
          </Text>
          <Text style={EMAIL_PARAGRAPH}>
            Use the link below to download the kit (the link will remain valid{" "}
            for 30 days). To generate for a different location or to use a{" "}
            different image variant, simply request a new kit using the tool.
          </Text>
          <Button style={EMAIL_BUTTON} href={signedUrl}>
            Download Community Kit
          </Button>
          <Hr style={EMAIL_HR} />
          <Text style={EMAIL_PARAGRAPH}>
            Loved the tool? Consider giving a{" "}
            <Link
              style={EMAIL_ANCHOR}
              href="https://github.com/praveentcom/gdg-community-kit"
            >
              star
            </Link>{" "}
            on GitHub, this will help reach more people and improve the tool.
          </Text>
          <Text style={EMAIL_PARAGRAPH}>
            If you&apos;ve any feedback or suggestions, feel free to reach out to{" "}
            me on{" "}
            <Link style={EMAIL_ANCHOR} href="https://x.com/praveentcom">
              X
            </Link>{" "}
            or simply reply to this email.
          </Text>
          <Text style={EMAIL_PARAGRAPH}>— Praveen Thirumurugan</Text>
          <Hr style={EMAIL_HR} />
          <Text style={EMAIL_FOOTER}>
            This email was sent to you because you requested a community kit for{" "}
            {communityName} on {moment(requestDate).format("LLL")}.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export const EMAIL_KIT_GENERATED_TEXT = ({
  fullName,
  communityName,
  signedUrl,
  requestDate,
}: {
  fullName: string;
  communityName: string;
  signedUrl: string;
  requestDate: Date;
}) => {
  return [
    `Hey ${fullName}`,
    ``,
    `Thanks for using the tool to generate the branding assets for ${communityName}. The community kit is generated and I hope you and your audience will love them.`,
    ``,
    `Use the link below to download the kit (the link will remain valid for 30 days). To generate for a different location or to use a different image variant, simply request a new kit using the tool.`,
    ``,
    `Download Community Kit: ${signedUrl}`,
    ``,
    `Loved the tool? Consider giving a star on GitHub, this will help reach more people and improve the tool.`,
    `If you've any feedback or suggestions, feel free to reach out to me on X or simply reply to this email.`,
    `— Praveen Thirumurugan`,
    ``,
    `This email was sent to you because you requested a community kit for ${communityName} on ${moment(requestDate).format("LLL")}.`,
  ].join("\n");
};
