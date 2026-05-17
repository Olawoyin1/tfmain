import re

portal_block = """
  /* --- Portal Responsive Engine --- */
  .portal-wrapper {
    display: flex;
    min-height: 100vh;
    background: var(--off);
    font-family: 'Outfit', sans-serif !important;
  }

  .portal-sidebar {
    width: 280px;
    background: var(--white);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 40px 24px;
    position: fixed;
    height: 100vh;
    z-index: 100;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .portal-sidebar.mobile-open {
    transform: translateX(0);
    box-shadow: 20px 0 60px rgba(0, 0, 0, 0.1);
  }

  .portal-main {
    flex: 1;
    margin-left: 280px;
    padding: 40px 60px;
    width: 100%;
    transition: margin-left 0.4s;
  }

  @media (max-width: 1024px) {
    .portal-sidebar {
      transform: translateX(-100%);
    }
    .portal-main {
      margin-left: 0;
      padding: 32px 20px;
    }
  }

  .mobile-toggle {
    display: none;
    width: 48px;
    height: 48px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 110;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    .mobile-toggle {
      display: flex;
    }
  }

  .portal-topbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 60px;
    gap: 32px;
  }

  .portal-card {
    background: var(--white);
    border-radius: 24px;
    padding: 32px;
    border: 1px solid var(--border);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  }

  /* --- Sidebar Links --- */
  .sidebar-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    border-radius: 16px;
    color: #48484a;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.3s;
    text-decoration: none;
  }

  .sidebar-link:hover {
    background: var(--off);
    color: var(--black);
  }

  .sidebar-link.active {
    background: var(--black);
    color: var(--white);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
"""

def process_css():
    try:
        with open('/tmp/old_index_utf8.css', 'r', encoding='utf-8') as f:
            old_css = f.read()
    except Exception:
        with open('/tmp/old_index_utf8.css', 'r', encoding='utf-16le') as f:
            old_css = f.read()
            
    # Remove BOM if present
    if old_css.startswith('\ufeff'):
        old_css = old_css[1:]
            
    # Remove italics
    old_css = re.sub(r'\s*font-style:\s*italic;\s*', '', old_css)
    
    # Prepend Outfit
    outfit_import = "@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');\n"
    if "Outfit" not in old_css:
        old_css = outfit_import + old_css
        
    # Apply portal block safely inside layer components
    layer_components_match = re.search(r'@layer components\s*\{', old_css)
    if layer_components_match:
        insert_pos = layer_components_match.end()
        new_css = old_css[:insert_pos] + '\n' + portal_block + '\n' + old_css[insert_pos:]
    else:
        new_css = old_css + '\n' + portal_block
        
    with open('c:/Users/HP/OneDrive/Desktop/Gbolahan/TalentFactory/src/index.css', 'w', encoding='utf-8') as f:
        f.write(new_css)

if __name__ == '__main__':
    process_css()
    print("Fixed CSS perfectly.")
