//
// FrontendUI.js
// Created on 06/01/2020
//
// Copyright (c) 2020 Teplovs
// This file is under Apache License v2.0
// 
// See https://www.apache.org/licenses/LICENSE-2.0 for license information
// 

// Views
    // Core
    export * from "./Views/View"
    export * from "./Views/ViewState"
    export * from "./Views/ViewStateResponse"

    // Generic
    export * from "./Views/Generic/Text"

    // Layouts
    export * from "./Views/Layouts/HStack"
    export * from "./Views/Layouts/VStack"
    
// VirtualDOM
export * from "./VirtualDOM/VNode"

// Values
export * from "./Values/Enum"
export * from "./Values/Color"
export * from "./Values/Font"
export * from "./Values/Length"

// Styles
export function normalizeDocumentStyles ({ applyFlexToBody = true }) {
    window.addEventListener ("load", () => {
        document.querySelectorAll("html, body").forEach(item => {
            item.style.margin = "0"
            item.style.padding = "0"
        })

        if (applyFlexToBody) {
            document.body.style.display = "flex"
            document.body.style.minHeight = "100vh"
            document.body.style.alignItems = "center"
            document.body.style.justifyContent = "center"
        }
        
        document.body.style.font = "normal 14pt sans-serif"
    })
}
