import fs from "fs/promises";

export async function getStoredContacts() {
  const rawFileContent = await fs.readFile("contacts.json", {
    encoding: "utf-8",
  });

  const data = JSON.parse(rawFileContent);

  const storedContacts = data.contacts ?? [];

  return storedContacts;
}

export function storeContacts(contacts) {
  return fs.writeFile(
    "contacts.json",
    JSON.stringify({ contacts: contacts || [] })
  );
}
