export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🔥 Amazon Deals</h1>
      <p>Willkommen! Wähle eine Kategorie:</p>

      <ul>
        <li>
          <a href="/de/deals">🇩🇪 Amazon Deals Deutschland</a>
        </li>
        <li>
          <a href="/de/bestseller">🇩🇪 Amazon Bestseller Deutschland</a>
        </li>
        <li>
          <a href="/us/deals">🇺🇸 Amazon Deals USA</a>
        </li>
        <li>
          <a href="/us/bestseller">🇺🇸 Amazon Bestseller USA</a>
        </li>
      </ul>

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#666" }}>
        * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
      </p>
    </main>
  );
}
