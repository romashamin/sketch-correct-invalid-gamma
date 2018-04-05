export default function(context) {
  const selectedLayers = context.selection

  if (selectedLayers.length === 0) {
    context.document.showMessage('Select at least one bitmap')
  } else {
    const predicateBitmapLayers = NSPredicate.predicateWithFormat("self isMemberOfClass:%@", MSBitmapLayer.class())
    const bitmapLayers = selectedLayers.filteredArrayUsingPredicate(predicateBitmapLayers)

    const bitmapLayersLength = bitmapLayers.length

    if (bitmapLayersLength === 0) {
      context.document.showMessage('Select at least one bitmap')
    } else {

      bitmapLayers.forEach(
        layer => layer.correctInvalidGamma()
      )

      if (bitmapLayersLength === 1) {
        context.document.showMessage(`The bitmap has been corrected`)
      } else {
        context.document.showMessage(`${bitmapLayersLength} bitmaps have been corrected`)
      }
    }
  }
}

function onShutdown(context) {
  // event on the plugin that's being updated
}

function onStartup(context) {
  // event on the plugin that is installed
}
