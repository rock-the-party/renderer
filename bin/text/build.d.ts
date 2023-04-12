import { IBuilder } from "../interface-private";
import { Point } from "../interfaces";
import { TextSpec } from "./spec";
export declare function BuildTextSpec(): TextSpecBuilder;
declare class TextSpecBuilder implements IBuilder {
    private metadata;
    private startPoint;
    private text;
    private maxWidth?;
    private direction?;
    private font?;
    private fontKerning?;
    private textAlign?;
    private textBaseline?;
    Reset(): void;
    Alpha(alpha: number): TextSpecBuilder;
    Rotation(rotation: number): TextSpecBuilder;
    FillStyle(color: string | CanvasGradient | CanvasPattern): TextSpecBuilder;
    StrokeStyle(color: string | CanvasGradient | CanvasPattern): TextSpecBuilder;
    StartPoint(startPoint: Point): TextSpecBuilder;
    Text(text: string): TextSpecBuilder;
    MaxWidth(maxWidth?: number): TextSpecBuilder;
    Direction(direction?: CanvasDirection): TextSpecBuilder;
    Font(font?: string): TextSpecBuilder;
    FontKerning(fontKerning: CanvasFontKerning): TextSpecBuilder;
    TextAlign(textAlign: CanvasTextAlign): TextSpecBuilder;
    TextBaseline(textBaseline: CanvasTextBaseline): TextSpecBuilder;
    Create(): TextSpec;
}
export {};