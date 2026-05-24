import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export function EmailTemplate({ email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>New Message from {email}</h1>
      <p>{message}</p>
    </div>
  );
}
