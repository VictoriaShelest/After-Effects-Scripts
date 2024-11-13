// Function to convert hex to RGBA array
function hexToRGBA(hexValue) {
    // Remove the '#' if it exists
    hexValue = hexValue.replace("#", "").trim();

    // Convert hex to RGB values (divide by 255 to normalize)
    var r = Math.round((parseInt(hexValue.substr(0, 2), 16) / 255) * 1000) / 1000;
    var g = Math.round((parseInt(hexValue.substr(2, 2), 16) / 255) * 1000) / 1000;
    var b = Math.round((parseInt(hexValue.substr(4, 2), 16) / 255) * 1000) / 1000;

    // Return RGBA array (with alpha = 1)
    return [r, g, b, 1];
}

// Get the active composition
var comp = app.project.activeItem;

if (comp instanceof CompItem) {  // Check if the active item is a composition
    // Find the layer with the hex value (must be a text layer)
    var hexValueLayer = comp.layer("hexValue");

    if (hexValueLayer && hexValueLayer instanceof TextLayer) {
        // Get the hex value from the text layer
        var hexValue = hexValueLayer.text.sourceText.value.toString(); // Corrected line
        
        // Convert hex to RGBA array
        var rgbaArray = hexToRGBA(hexValue);
        
        // Format RGBA array for display
        var rgbaString = "[" + rgbaArray.join(", ") + "]";

        // Use prompt to display the RGBA array, allowing manual copy
        prompt("Copy the RGBA Array", rgbaString);
        
    } else {
        alert("Layer 'hexValue' is not found or is not a text layer.");
    }
} else {
    alert("No active composition selected.");
}
