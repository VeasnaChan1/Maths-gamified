/**
 * Diagram renders clean, educational SVG mathematical illustrations
 * for questions that specify a diagram object or type.
 */
export default function Diagram({ data }) {
  if (!data) return null;

  // Fraction bar diagram: { type: 'fraction_bar', parts: 4, shaded: 3, label: '3/4' }
  if (data.type === 'fraction_bar') {
    const parts = data.parts || 4;
    const shaded = data.shaded || 1;
    const width = 280;
    const height = 48;
    const partWidth = width / parts;

    return (
      <div className="math-diagram-container" style={{ margin: '16px auto', textAlign: 'center' }}>
        <svg
          viewBox={`0 0 ${width} ${height + 24}`}
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label={`Fraction bar showing ${shaded} out of ${parts} parts shaded`}
        >
          {Array.from({ length: parts }).map((_, i) => (
            <rect
              key={i}
              x={i * partWidth}
              y={0}
              width={partWidth}
              height={height}
              fill={i < shaded ? 'var(--primary-soft)' : '#FFFFFF'}
              stroke="var(--primary)"
              strokeWidth="2"
            />
          ))}
          {data.label && (
            <text
              x={width / 2}
              y={height + 18}
              textAnchor="middle"
              fill="var(--text)"
              fontSize="14"
              fontWeight="600"
            >
              {data.label}
            </text>
          )}
        </svg>
      </div>
    );
  }

  // Rectangle Area/Perimeter: { type: 'rectangle', width: 6, height: 4, unit: 'cm' }
  if (data.type === 'rectangle') {
    const w = data.width || 6;
    const h = data.height || 4;
    const unit = data.unit || 'cm';
    const svgWidth = 260;
    const svgHeight = 150;
    const rectX = 40;
    const rectY = 25;
    const rectW = 180;
    const rectH = 95;

    return (
      <div className="math-diagram-container" style={{ margin: '16px auto', textAlign: 'center' }}>
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label={`Rectangle with width ${w}${unit} and height ${h}${unit}`}
        >
          <rect
            x={rectX}
            y={rectY}
            width={rectW}
            height={rectH}
            fill="#FAFAFA"
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <text
            x={rectX + rectW / 2}
            y={rectY - 8}
            textAnchor="middle"
            fill="var(--text)"
            fontSize="14"
            fontWeight="600"
          >
            {w} {unit}
          </text>
          <text
            x={rectX - 10}
            y={rectY + rectH / 2 + 5}
            textAnchor="end"
            fill="var(--text)"
            fontSize="14"
            fontWeight="600"
          >
            {h} {unit}
          </text>
        </svg>
      </div>
    );
  }

  // Right-Angled Triangle for Pythagoras: { type: 'pythagoras_triangle', legA: 3, legB: 4, hypotenuse: '?' }
  if (data.type === 'pythagoras_triangle') {
    const a = data.legA || '3 cm';
    const b = data.legB || '4 cm';
    const c = data.hypotenuse || 'c = ?';
    const svgWidth = 260;
    const svgHeight = 160;

    return (
      <div className="math-diagram-container" style={{ margin: '16px auto', textAlign: 'center' }}>
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label={`Right-angled triangle with leg ${a}, leg ${b}, and hypotenuse ${c}`}
        >
          <polygon
            points="50,130 210,130 50,25"
            fill="#FAFAFA"
            stroke="var(--primary)"
            strokeWidth="2"
          />
          <rect
            x="50"
            y="114"
            width="16"
            height="16"
            fill="none"
            stroke="var(--text-secondary)"
            strokeWidth="1.5"
          />
          <text
            x="36"
            y="82"
            textAnchor="end"
            fill="var(--text)"
            fontSize="14"
            fontWeight="600"
          >
            {a}
          </text>
          <text
            x="130"
            y="150"
            textAnchor="middle"
            fill="var(--text)"
            fontSize="14"
            fontWeight="600"
          >
            {b}
          </text>
          <text
            x="145"
            y="70"
            textAnchor="start"
            fill="var(--primary)"
            fontSize="15"
            fontWeight="700"
          >
            {c}
          </text>
        </svg>
      </div>
    );
  }

  // Coordinate / Linear graph
  if (data.type === 'linear_graph') {
    const eq = data.equation || 'y = 2x + 1';
    return (
      <div className="math-diagram-container" style={{ margin: '16px auto', textAlign: 'center' }}>
        <svg
          viewBox="0 0 240 180"
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label={`Linear graph for ${eq}`}
        >
          <path
            d="M 20 50 H 220 M 20 90 H 220 M 20 130 H 220 M 60 20 V 160 M 120 20 V 160 M 180 20 V 160"
            stroke="#E2E5E0"
            strokeWidth="1"
          />
          <line x1="20" y1="90" x2="220" y2="90" stroke="var(--text)" strokeWidth="1.5" />
          <line x1="120" y1="20" x2="120" y2="160" stroke="var(--text)" strokeWidth="1.5" />
          <text x="216" y="82" fill="var(--text-secondary)" fontSize="12" fontWeight="600">x</text>
          <text x="128" y="28" fill="var(--text-secondary)" fontSize="12" fontWeight="600">y</text>
          <text x="110" y="104" fill="var(--text-secondary)" fontSize="11">0</text>
          <line x1="50" y1="150" x2="190" y2="30" stroke="var(--primary)" strokeWidth="2.5" />
          <text x="135" y="45" fill="var(--primary)" fontSize="13" fontWeight="600">{eq}</text>
        </svg>
      </div>
    );
  }

  // Angles on a straight line
  if (data.type === 'angles_line') {
    const known = data.knownAngle || '120°';
    const unknown = data.unknownAngle || 'x';
    return (
      <div className="math-diagram-container" style={{ margin: '16px auto', textAlign: 'center' }}>
        <svg
          viewBox="0 0 240 120"
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label={`Angles on a straight line with ${known} and ${unknown}`}
        >
          <line x1="20" y1="90" x2="220" y2="90" stroke="var(--text)" strokeWidth="2" />
          <line x1="120" y1="90" x2="70" y2="30" stroke="var(--primary)" strokeWidth="2" />
          <path d="M 90 90 A 30 30 0 0 1 100 66" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5" />
          <path d="M 100 66 A 30 30 0 0 1 150 90" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
          <text x="75" y="80" fill="var(--text-secondary)" fontSize="12" fontWeight="600">{known}</text>
          <text x="135" y="75" fill="var(--primary)" fontSize="13" fontWeight="700">{unknown}</text>
        </svg>
      </div>
    );
  }

  return null;
}
