"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawImage = void 0;
function DrawImage(spec, context) {
    if (context == null)
        return;
    context.save();
    if (spec.metadata.alpha) {
        context.globalAlpha = spec.metadata.alpha;
    }
    if (spec.metadata.rotation) {
        context.translate(spec.center.x, spec.center.y);
        context.rotate(spec.metadata.rotation);
        context.translate(-spec.center.x, -spec.center.y);
    }
    context.drawImage(spec.image, spec.center.x - spec.size.width, spec.center.y - spec.size.height, spec.size.width, spec.size.height);
    context.restore();
}
exports.DrawImage = DrawImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbWFnZS9kcmF3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLFNBQWdCLFNBQVMsQ0FBQyxJQUFlLEVBQUUsT0FBaUM7SUFDeEUsSUFBSSxPQUFPLElBQUksSUFBSTtRQUFFLE9BQU87SUFDNUIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO0lBRWQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUN2QixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQzNDO0lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFFRCxPQUFPLENBQUMsU0FBUyxDQUNmLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDakIsQ0FBQztJQUVGLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBdkJILDhCQXVCRyJ9