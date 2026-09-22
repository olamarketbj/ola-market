export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f9f9f9' }}>
      {/* Header */}
      <header style={{ background: '#1B2A4A', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>O'LA Market</h1>
        <nav style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
          <a href="/market" style={{ color: 'white', textDecoration: 'none' }}>Acheter</a>
          <a href="/cart" style={{ color: 'white', textDecoration: 'none' }}>Panier</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Connexion</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h2 style={{ fontSize: '36px', color: '#1B2A4A', marginBottom: '15px' }}>
          Bienvenue sur O'LA Market
        </h2>
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
          La marketplace béninoise sans commission sur les ventes.
        </p>
        <a href="/market" style={{ display: 'inline-block', padding: '14px 30px', background: '#F5A623', color: '#1B2A4A', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          Découvrir les produits
        </a>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1B2A4A', color: 'white', padding: '20px', textAlign: 'center', fontSize: '13px', marginTop: '60px' }}>
        <p>© 2026 O'LA Market — Bénin</p>
      </footer>
    </main>
  )
}
