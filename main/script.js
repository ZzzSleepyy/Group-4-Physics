
    // Flip cards
    document.querySelectorAll('.card').forEach((card, i) => {
      card.style.animationDelay = `${i * 0.1}s`;
      card.addEventListener('click', e => {
        if (!e.target.classList.contains('tag')) {
          card.classList.toggle('flipped');
        }
      });
    });
    
    // Search filter
    const search = document.getElementById('search');
    if (search) {
      search.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
          card.style.display = card.textContent.toLowerCase().includes(term) ? '' : 'none';
        });
      });
    }

    // Section switching
    const links = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        sections.forEach(sec => sec.style.display = 'none');
        const target = document.querySelector(targetId);
        if (target) target.style.display = 'block';

        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
