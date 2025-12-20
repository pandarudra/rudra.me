import Script from "next/script";

const catConfig = {
  enabled: true,
};

export default function OnekoCat() {
  if (!catConfig.enabled) {
    return null;
  }

  return (
    <Script
      src="/oneko/oneko.js"
      data-cat="/oneko/oneko.gif"
      strategy="afterInteractive"
    />
  );
}
