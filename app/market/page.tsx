import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function MarketPage() {
  const supabase = await createClient()
  const { data: products, error } = await supabase
    .from('products')
    .select('id, name, slug, price, images, stores (name, slug)')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(20)

  return (
    <main style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#f9f9f9' }}>
      <header style={{ background: '#1B2A4A', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>O'LA Market</Link>
        </h1>
        <nav style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
          <Link href="/market" style={{ color: '#F5A623', textDecoration: 'none', fontWeight: 'bold' }}>Acheter</Link>
          <Link href="/cart" style={{ color: 'white', textDecoration: 'none' }}>Panier</Link>
          <Link href="/login" style={{ color: 'white', textDecoration: 'none' }}>Connexion</Link>
        </nav>
      </header>

      <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', color: '#1B2A4A', marginBottom: '20px' }}>Tous les produits</h2>
        {error && <p style={{ color: 'red' }}>Erreur : {error.message}</p>}
        {!products || products.length === 0 ? (
          <p style={{ color: '#666' }}>Aucun produit pour le moment. Les vendeurs peuvent commencer à ajouter leurs articles.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ height: '150px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
                  {product.images && product.images.length > 0 ? (
                    <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : 'Image produit'}
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '5px', color: '#1B2A4A' }}>{product.name}</h3>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#F5A623' }}>{product.price.toLocaleString('fr-FR')} FCFA</p>
                  {product.stores && <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>{product.stores.name}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer style={{ background: '#1B2A4A', color: 'white', padding: '20px', textAlign: 'center', fontSize: '13px', marginTop: '60px' }}>
        <p>© 2026 O'LA Market — Bénin</p>
      </footer>
    </main>
  )
}
