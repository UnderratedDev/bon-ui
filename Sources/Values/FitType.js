//
// FitType.js
// Created on 13/03/2020
//
// Copyright (c) 2020 Teplovs
// This file is under Apache License v2.0
// 
// See https://www.apache.org/licenses/LICENSE-2.0 for license information
// 

import { Enum } from "./Enum"

/**
 * A enum that contains possible fit types. Used for Image view
 * @enum
 * @property {Symbol} cover             The image will be bigger than or equal to the specified size
 * @property {Symbol} fill              The image will be stretched
 * @property {Symbol} contain           The image will be less than or equal to the specified size
 * @property {Symbol} none              The image is not resized
 */
export const FitType = new Enum("cover", "fill", "contain", "none")

/**
 * A function to convert the FitType enum item to css value
 * @param   {Symbol} type
 * @returns {String} CSS `object-fit` value
 */
export function fitTypeToCssValue(type) {
    if (!FitType.contains(type)) {
        return undefined
    }

    switch (type) {
        case FitType.cover:
            return "cover"
        case FitType.fill:
            return "fill"
        case FitType.contain:
            return "contain"
        case FitType.none:
            return "none"
        case FitType.scaleDown:
            return "scale-down"
    }
}

