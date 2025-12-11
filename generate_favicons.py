import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
from matplotlib.colors import LinearSegmentedColormap

# Define Brand Colors based on the image provided
color_start = "#E02E2E" # Red/Orange
color_end = "#5E2E85"   # Purple
color_text = "#FFD54F"  # Yellow/Gold

def create_gradient(width, height):
    y = np.linspace(0, 1, height)
    x = np.linspace(0, 1, width)
    X, Y = np.meshgrid(x, y)
    return X # Horizontal gradient

def setup_plot():
    fig, ax = plt.subplots(figsize=(2, 2), dpi=128) # 256x256 pixel output
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')
    return fig, ax

def draw_gradient_bg(ax):
    # Create a custom colormap
    cmap = LinearSegmentedColormap.from_list("custom_grad", [color_start, color_end])
    grad = create_gradient(100, 100)
    ax.imshow(grad, extent=[0, 1, 0, 1], aspect='auto', cmap=cmap, origin='lower')

# --- Design 1: The Big "W" ---
fig1, ax1 = setup_plot()
draw_gradient_bg(ax1)
ax1.text(0.5, 0.45, "W", fontsize=110, color=color_text,
         ha='center', va='center', weight='bold', fontname='DejaVu Sans')
plt.savefig('public/favicon_w.png', bbox_inches='tight', pad_inches=0, transparent=False)
plt.close()

# --- Design 2: The Retro Mic (Diamond) ---
fig2, ax2 = setup_plot()
draw_gradient_bg(ax2)
# Mic Body
ax2.add_patch(patches.FancyBboxPatch((0.35, 0.4), 0.3, 0.4, boxstyle="round,pad=0.02",
                                     fc=color_text, ec="none"))
# Mic Stand
ax2.add_patch(patches.Rectangle((0.48, 0.2), 0.04, 0.2, fc=color_text))
ax2.add_patch(patches.Rectangle((0.3, 0.2), 0.4, 0.05, fc=color_text))
plt.savefig('public/favicon_mic.png', bbox_inches='tight', pad_inches=0, transparent=False)
plt.close()

# --- Design 3: The Music Note ---
fig3, ax3 = setup_plot()
draw_gradient_bg(ax3)
ax3.text(0.5, 0.5, "♪", fontsize=110, color=color_text,
         ha='center', va='center', fontname='DejaVu Sans')
plt.savefig('public/favicon_note.png', bbox_inches='tight', pad_inches=0, transparent=False)
plt.close()

# --- Design 4: The Diamond WSS ---
fig4, ax4 = setup_plot()
ax4.axis('off')
d = patches.RegularPolygon((0.5, 0.5), numVertices=4, radius=0.7, orientation=0, fc=color_end)
ax4.add_patch(d)
ax4.text(0.5, 0.5, "WSS", fontsize=45, color=color_text,
         ha='center', va='center', weight='bold', fontname='DejaVu Sans')
plt.savefig('public/favicon_diamond.png', bbox_inches='tight', pad_inches=0, transparent=False)
plt.close()

print("Favicons generated successfully!")
