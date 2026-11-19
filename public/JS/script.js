// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });

  // Dark / Light Theme Toggle handler
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleIcon = document.getElementById('themeToggleIcon');

  function updateThemeIcon(theme) {
    if (!themeToggleIcon) return;
    if (theme === 'dark') {
      themeToggleIcon.classList.remove('fa-moon');
      themeToggleIcon.classList.add('fa-sun');
    } else {
      themeToggleIcon.classList.remove('fa-sun');
      themeToggleIcon.classList.add('fa-moon');
    }
  }

  // Initialize theme icon on DOM load based on active theme
  const initialTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
  updateThemeIcon(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
      const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-bs-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
      updateThemeIcon(targetTheme);

      // Dispatch custom event for dynamic components like Mapbox
      window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: targetTheme } }));
    });
  }

  // ----------------------------------------------------
  // Search Autocomplete with Debounce (250ms)
  // ----------------------------------------------------
  const searchInput = document.getElementById('navSearchInput');
  const searchForm = document.getElementById('searchForm');
  const suggestionsBox = document.getElementById('searchSuggestions');
  const searchContainer = document.getElementById('searchContainer');

  if (searchInput && suggestionsBox) {
    let debounceTimer = null;
    let currentQuery = '';

    function closeSuggestions() {
      suggestionsBox.classList.remove('show');
      while (suggestionsBox.firstChild) {
        suggestionsBox.removeChild(suggestionsBox.firstChild);
      }
    }

    async function fetchSuggestions(query) {
      try {
        const res = await fetch(`/listings/suggest?q=${encodeURIComponent(query)}`);
        if (!res.ok) return;
        const data = await res.json();
        renderSuggestions(data);
      } catch (err) {
        console.error('Failed to load search suggestions:', err);
      }
    }

    function renderSuggestions(items) {
      while (suggestionsBox.firstChild) {
        suggestionsBox.removeChild(suggestionsBox.firstChild);
      }

      if (!items || items.length === 0) {
        closeSuggestions();
        return;
      }

      items.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'dropdown-item search-suggestion-item';
        link.href = '#';

        // Left icon element
        const iconDiv = document.createElement('div');
        iconDiv.className = 'search-suggestion-icon';
        const icon = document.createElement('i');

        // Info container element
        const infoDiv = document.createElement('div');
        infoDiv.className = 'search-suggestion-info';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'search-suggestion-title';

        const subtitleDiv = document.createElement('div');
        subtitleDiv.className = 'search-suggestion-subtitle';

        if (item.type === 'place') {
          icon.className = 'fa-solid fa-location-dot text-danger';
          titleDiv.textContent = item.location;
          subtitleDiv.textContent = item.country;

          link.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = item.text || item.location;
            closeSuggestions();
            if (searchForm) {
              searchForm.submit();
            }
          });
        } else {
          // listing type
          icon.className = 'fa-solid fa-hotel text-primary';
          titleDiv.textContent = item.title;
          const subtitleText = [item.location, item.country].filter(Boolean).join(', ');
          subtitleDiv.textContent = subtitleText || 'Listing';

          link.addEventListener('click', (e) => {
            e.preventDefault();
            closeSuggestions();
            window.location.href = `/listings/${encodeURIComponent(item.id)}`;
          });
        }

        iconDiv.appendChild(icon);
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(subtitleDiv);

        link.appendChild(iconDiv);
        link.appendChild(infoDiv);
        li.appendChild(link);
        suggestionsBox.appendChild(li);
      });

      suggestionsBox.classList.add('show');
    }

    // Debounced input handler (250ms)
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim();
      currentQuery = q;

      clearTimeout(debounceTimer);
      if (q.length < 2) {
        closeSuggestions();
        return;
      }

      debounceTimer = setTimeout(() => {
        if (currentQuery.length >= 2) {
          fetchSuggestions(currentQuery);
        }
      }, 250);
    });

    // Reopen suggestions if input already has text and is focused
    searchInput.addEventListener('focus', () => {
      const q = searchInput.value.trim();
      if (q.length >= 2 && suggestionsBox.children.length > 0) {
        suggestionsBox.classList.add('show');
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSuggestions();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (searchContainer && !searchContainer.contains(e.target)) {
        closeSuggestions();
      }
    });
  }
})();
