import { IBuilder } from "../interface-private";
import { MetaData, Point, RadianAngle, RendererSpecType } from "../interfaces";
import { CircleSpec } from "./spec";

export function BuildCircleSpec(): CircleSpecBuilder {
  return new CircleSpecBuilder();
}

class CircleSpecBuilder implements IBuilder {
  private center: Point = { x: 0, y: 0};
  private radius: number = 0;
  private isFilled: boolean = true;
  private isClockwise: boolean = true;
  private radianAngle: RadianAngle = { start: 0, end: 2*Math.PI };
  private metadata: MetaData = { };

  public Reset(): void {
    this.center = { x: 0, y: 0};
    this.radius = 0;
    this.isFilled = true;
    this.isClockwise = true;
    this.radianAngle = { start: 0, end: 2*Math.PI };
    this.metadata = { };
  }

  public Alpha(alpha: number): CircleSpecBuilder {
    this.metadata.alpha = alpha;
    return this;
  }

  public Rotation (rotation: number): CircleSpecBuilder {
    this.metadata.rotation = rotation;
    return this;
  }

  public FillStyle (color: string | CanvasGradient | CanvasPattern): CircleSpecBuilder {
    this.metadata.fillStyle = color;
    return this;
  }

  public StrokeStyle (color: string | CanvasGradient | CanvasPattern): CircleSpecBuilder {
    this.metadata.strokeStyle = color;
    return this;
  }

  public Radius(r: number): CircleSpecBuilder {
    this.radius = r;
    return this;
  }

  public IsFilled(isFilled: boolean): CircleSpecBuilder {
    this.isFilled = isFilled;
    return this;
  }

  public Center (center: Point): CircleSpecBuilder {
    this.center = center;
    return this;
  }

  public RadianAngle (radianAngle: RadianAngle): CircleSpecBuilder {
    this.radianAngle = radianAngle;
    return this;
  }

  public Create(): CircleSpec {
    return {
      spec: RendererSpecType.CircleSpec,
      isClockwise: this.isClockwise,
      isFilled: this.isFilled,
      radius: this.radius,
      center: this.center,
      radianAngle: this.radianAngle,
      metadata: this.metadata
    }
  }
}
