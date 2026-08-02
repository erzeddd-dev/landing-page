import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Uji Data - Jasa Olah Data Penelitian';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #050505, #1a1a2e)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Glow effect in background */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          {/* Logo icon substitute */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '24px',
              background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
              marginRight: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
            }}
          >
            <div style={{ width: '50px', height: '50px', borderTop: '6px solid white', borderRight: '6px solid white', borderRadius: '4px', transform: 'rotate(45deg)' }} />
          </div>
          <h1
            style={{
              fontSize: '110px',
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            Uji Data
          </h1>
        </div>
        
        <p
          style={{
            fontSize: '42px',
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            zIndex: 10,
            margin: 0,
          }}
        >
          Tinggalkan stres analisis data.<br />Biar kami yang urus datanya sampai tuntas.
        </p>
        
        <div style={{ display: 'flex', marginTop: '60px', gap: '24px', zIndex: 10 }}>
           <div style={{ padding: '12px 32px', borderRadius: '100px', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '2px solid rgba(59, 130, 246, 0.5)', color: '#60a5fa', fontSize: '28px', fontWeight: 'bold' }}>SPSS</div>
           <div style={{ padding: '12px 32px', borderRadius: '100px', backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '2px solid rgba(139, 92, 246, 0.5)', color: '#a78bfa', fontSize: '28px', fontWeight: 'bold' }}>EViews</div>
           <div style={{ padding: '12px 32px', borderRadius: '100px', backgroundColor: 'rgba(236, 72, 153, 0.1)', border: '2px solid rgba(236, 72, 153, 0.5)', color: '#f472b6', fontSize: '28px', fontWeight: 'bold' }}>Ekonometrika</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
