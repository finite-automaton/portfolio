"use server";

import { LANGS, getDictionary } from "./dictionaries";

export async function getLanguageDictionary(language: LANGS) {
  return getDictionary(language);
}

export async function create(formData: FormData) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: "contact@johnfletcher.ch",
      to: "johnmichaelfletcher@gmail.com",
      sender: formData.get("name"),
      senderEmail: formData.get("email"),
      subject: formData.get("subject"),
      text: `From: ${formData.get("name")}\nEmail: ${formData.get(
        "email"
      )}\n${formData.get("message")}`,
    }),
  });
}
