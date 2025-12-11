from PIL import Image, ImageDraw, ImageFont
import os

# Define Brand Colors
color_start = (224, 46, 46)     # #E02E2E Red/Orange
color_end = (94, 46, 133)       # #5E2E85 Purple
color_text = (255, 213, 79)     # #FFD54F Yellow/Gold

size = 256

def create_gradient_bg(width, height):
    """Create a horizontal gradient from red to purple"""
    img = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(img)

    for x in range(width):
        # Interpolate between start and end colors
        ratio = x / width
        r = int(color_start[0] * (1 - ratio) + color_end[0] * ratio)
        g = int(color_start[1] * (1 - ratio) + color_end[1] * ratio)
        b = int(color_start[2] * (1 - ratio) + color_end[2] * ratio)
        draw.line([(x, 0), (x, height)], fill=(r, g, b))

    return img

# --- Design 1: The Big "W" ---
img1 = create_gradient_bg(size, size)
draw1 = ImageDraw.Draw(img1)
try:
    font_large = ImageFont.truetype("arial.ttf", 180)
except:
    font_large = ImageFont.load_default()
draw1.text((size//2, size//2), "W", fill=color_text, font=font_large, anchor="mm")
img1.save('public/favicon_w.png')

# --- Design 2: The Retro Mic ---
img2 = create_gradient_bg(size, size)
draw2 = ImageDraw.Draw(img2)
# Mic body (rounded rectangle)
draw2.rounded_rectangle([(90, 100), (170, 200)], radius=10, fill=color_text)
# Mic stand vertical
draw2.rectangle([(120, 180), (135, 230)], fill=color_text)
# Mic stand horizontal base
draw2.rectangle([(80, 220), (175, 235)], fill=color_text)
img2.save('public/favicon_mic.png')

# --- Design 3: The Music Note ---
img3 = create_gradient_bg(size, size)
draw3 = ImageDraw.Draw(img3)
try:
    font_note = ImageFont.truetype("arial.ttf", 180)
except:
    font_note = ImageFont.load_default()
draw3.text((size//2, size//2), "♪", fill=color_text, font=font_note, anchor="mm")
img3.save('public/favicon_note.png')

# --- Design 4: The Diamond WSS ---
img4 = Image.new('RGB', (size, size), color_end)
draw4 = ImageDraw.Draw(img4)
# Draw diamond shape
center = size // 2
diamond_points = [
    (center, 30),           # top
    (size - 30, center),    # right
    (center, size - 30),    # bottom
    (30, center)            # left
]
draw4.polygon(diamond_points, fill=color_end)
try:
    font_wss = ImageFont.truetype("arial.ttf", 70)
except:
    font_wss = ImageFont.load_default()
draw4.text((size//2, size//2), "WSS", fill=color_text, font=font_wss, anchor="mm")
img4.save('public/favicon_diamond.png')

print("✓ All 4 favicon designs generated successfully!")
print("  - favicon_w.png (Classic W)")
print("  - favicon_mic.png (Podcast Mic)")
print("  - favicon_note.png (Musical Note)")
print("  - favicon_diamond.png (Diamond WSS)")
