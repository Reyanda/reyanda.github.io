/* =============================================
   manimR — Subpage JavaScript
   ============================================= */

/* ---- Copy install command ---- */
const copyBtn = document.getElementById('copyBtn');
const installCmd = document.getElementById('installCmd');
if (copyBtn && installCmd) {
  copyBtn.addEventListener('click', async () => {
    const text = installCmd.querySelector('code').textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>`;
      copyBtn.style.color = '#22c55e';
      setTimeout(() => {
        copyBtn.innerHTML = `<svg id="copyIcon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`;
        copyBtn.style.color = '';
      }, 2000);
    } catch (e) {
      // Fallback: select text
      const range = document.createRange();
      range.selectNodeContents(installCmd.querySelector('code'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  });
}

/* ---- Animated wave path on canvas ---- */
const wavePath = document.querySelector('.anim-wave');
if (wavePath) {
  const radius = 80;
  const trailLength = 200; // degrees of trail
  let angle = 0;

  function buildWavePath(currentAngle) {
    const points = [];
    const steps = 60;
    const startAngle = currentAngle - (trailLength * Math.PI / 180);
    for (let i = 0; i <= steps; i++) {
      const a = startAngle + (i / steps) * (trailLength * Math.PI / 180);
      const x = Math.cos(a) * radius;
      const y = Math.sin(a) * radius;
      points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return points.join(' ');
  }

  function animateWave(ts) {
    angle = (ts / 1000) * (Math.PI / 2); // full rotation in 4s
    wavePath.setAttribute('d', buildWavePath(angle));
    requestAnimationFrame(animateWave);
  }

  requestAnimationFrame(animateWave);
}

/* ---- Parallax orbs on scroll ---- */
const heroOrbs = document.querySelectorAll('.manimr-orb');
if (heroOrbs.length > 0) {
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    heroOrbs.forEach((orb, i) => {
      const speed = [0.12, -0.08, 0.05][i] || 0;
      orb.style.transform = `translateY(${sy * speed}px)`;
    });
  }, { passive: true });
}

/* ---- Gallery hover glow ---- */
document.querySelectorAll('.gallery-visual').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = '0 0 60px rgba(168,85,247,0.2)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = '';
  });
});
