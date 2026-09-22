export default function MarketPage() {
  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f9f9f9' }}>
      <header style={{ background: '#1B2A4A', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>O'LA Market</a>
        </h1>
        <nav style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
          <a href="/market" style={{ color: '#F5A623', textDecoration: 'none', fontWeight: 'bold' }}>Acheter</a>
          <a href="/cart" style={{ color: 'white', textDecoration: 'none' }}>Panier</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Connexion</a>
        </nav>
      </header>

      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', color: '#1B2A4A', marginBottom: '20px' }}>
          Tous les produits
        </h2>
        <p style={{ color: '#666' }}>
          La liste des produits s'affichera bientôt ici, une fois Supabase connecté.
        </p>

        {/* Grille de démonstration */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ height: '150px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                Image produit
              </div>
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '5px', color: '#1B2A4A' }}>Produit {i}</h3>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F5A623' }}>5 000 FCFA</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: '#1B2A4A', color: 'white', padding: '20px', textAlign: 'center', fontSize: '13px', marginTop: '60px' }}>
        <p>© 2026 O'LA Market — Bénin</p>
      </footer>
    </main>
  )
}
 
