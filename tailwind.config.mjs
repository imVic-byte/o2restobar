export default {
  "design_system": {
    "colors": {
      "background": "#09090b",     
      "surface": "#18181b",        
      "surface_hover": "#27272a",  
      "text_primary": "#fafafa",   
      "text_secondary": "#a1a1aa", 
      "accent": "#facc15",         
      "accent_hover": "#eab308"    
    },
    "typography": {
      "headings": {
        "family": "'Montserrat', sans-serif",
        "weight": "800",
        "transform": "uppercase"
      },
      "body": {
        "family": "'Inter', sans-serif",
        "weight": "400",
        "size": "text-sm"
      }
    },
    "components": {
      "card": {
        "layout": "flex flex-col gap-2",
        "padding": "p-4",
        "bg": "bg-surface",
        "border_radius": "rounded-xl",
        "border": "border border-zinc-800",
        "shadow": "shadow-lg shadow-black/40"
      },
      "price_badge": {
        "layout": "inline-flex items-center px-2.5 py-0.5",
        "bg": "bg-accent/10",
        "text_color": "text-accent",
        "font_weight": "font-bold",
        "border_radius": "rounded-md"
      },
      "tabs": {
        "active": "border-b-2 border-accent text-accent font-bold",
        "inactive": "text-text_secondary hover:text-text_primary transition-colors"
      }
    }
  }
}
