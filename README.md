# HexToRGBA Converter Documentation

**Overview**

HexToRGBA Converter is an After Effects script that converts a hex color value into an RGBA array. It’s designed to make it easier for motion designers and animators to quickly translate hex codes (commonly used in design tools like Figma, Sketch, or web CSS) into normalized RGBA values for After Effects expressions and effects.

Created by: Victoria Shelest

Year: 2024

**What it does**

The script looks for a text layer named `hexValue` in the active composition. It reads the hex color string from that layer, converts it into an RGBA array with normalized values between 0 and 1, and then displays the result in a prompt window for easy copy-paste into expressions.


**It creates**

- An RGBA array in the format `[R, G, B, A]`, where each channel is normalized (0–1).
- A prompt window showing the converted array, ready to copy and use in expressions.
- Alpha is always set to `1`.

**Installation**

1. Copy `hex_to_rgba.jsx` to your After Effects Scripts folder:
- **Windows:** `C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\`
- **Mac:** `/Applications/Adobe After Effects [version]/Scripts/`
2. Restart After Effects.
3. Access via **File > Scripts > HexToRGBA Converter**.

**Before running**

1. Enable Script File Access: go to **Edit > Preferences > Scripting & Expressions** and check *Allow Scripts to Write Files and Access Network*.
2. Create or open a composition and add a text layer named `hexValue`.
3. Type a hex color value into the text layer (for example: `#FF6600`).
4. Run the script. A prompt window will appear with the converted RGBA array.
