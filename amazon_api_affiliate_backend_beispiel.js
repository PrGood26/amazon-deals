// ✅ AMAZON PRODUCT ADVERTISING API – Node.js Backend (legal & automatisch)
// Voraussetzung: Amazon PartnerNet + API-Zugang

import express from "express";
import crypto from "crypto";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// 🔐 AMAZON API DATEN (HIER EINTRAGEN)
const ACCESS_KEY = "DEIN_ACCESS_KEY";
const SECRET_KEY = "DEIN_SECRET_KEY";
const PARTNER_TAG = "dein-affiliate-tag-21";
const REGION = "eu-west-1";
const HOST = "webservices.amazon.de";

app.get("/api/trends", async (req, res) => {
  // 👉 Beispiel: Bestseller aus Kategorie
  const payload = {
    PartnerTag: PARTNER_TAG,
    PartnerType: "Associates",
    Marketplace: "www.amazon.de",
    Resources: [
      "Images.Primary.Medium",
      "ItemInfo.Title",
      "Offers.Listings.Price"
    ],
    BrowseNodeId: "562066" // Elektronik (Beispiel)
  };

  // 🔏 Signatur (vereinfacht – produktiv absichern!)
  const hash = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(JSON.stringify(payload))
    .digest("hex");

  const response = await fetch(`https://${HOST}/paapi5/getitems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Amz-Date": new Date().toISOString(),
      "Authorization": hash
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`✅ Amazon API läuft auf http://localhost:${PORT}`);
});

/*
🧠 FRONTEND:
Deine HTML-Seite ruft /api/trends auf und rendert Produkte automatisch.

⚠️ WICHTIG:
- Preise & Bilder NUR über API laden (Amazon Regel!)
- Cache (z.B. 1x täglich) empfohlen
*/
