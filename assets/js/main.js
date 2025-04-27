const { createElement: h } = React;

      function Poster() {
        return (
          h('div', { className: 'poster' },
            h('img', { src: 'assets/images/mh_logo.png', alt: 'Logo', className: 'logo' }),
            h('h1', null, "YOUR CV ISN'T JUST A DOCUMENT", h('br'), "IT'S YOUR FIRST IMPRESSION"),
            h('p', { className: 'subtext' }, 'Get an ATS-friendly, modern, and professionally designed CV today.'),
            h('a', { href: 'https://mh-web.netlify.app/services#services', target: '_blank' },
              h('button', { className: 'cta' }, 'Send Your Request')
            ),
            h('p', { className: 'link-text' }, 'mh-web.netlify.app/services')
          )
        );
      }

      ReactDOM.createRoot(document.getElementById('root')).render(h(Poster));