"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawRect = void 0;
function DrawRect(spec, context) {
    if (context == null)
        return;
    context.save();
    if (spec.metadata.alpha) {
        context.globalAlpha = spec.metadata.alpha;
    }
    if (spec.metadata.rotation) {
        context.translate(spec.startPoint.x, spec.startPoint.y);
        context.rotate(spec.metadata.rotation);
        context.translate(-spec.startPoint.x, -spec.startPoint.y);
    }
    if (spec.metadata.fillStyle) {
        context.fillStyle = spec.metadata.fillStyle;
    }
    context.fillRect(spec.startPoint.x, spec.startPoint.y, spec.size.width, spec.size.height);
    context.restore();
}
exports.DrawRect = DrawRect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZWN0L2RyYXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBZ0IsUUFBUSxDQUFDLElBQWMsRUFBRSxPQUFpQztJQUN4RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTztJQUM1QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFFZCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7S0FDM0M7SUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzRDtJQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztLQUM3QztJQUVELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQXBCRCw0QkFvQkMifQ==