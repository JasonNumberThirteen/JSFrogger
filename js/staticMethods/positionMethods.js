class PositionMethods {
	static clamp(position, minPosition, maxPosition) {
		const x = MathMethods.clamp(position.x, minPosition.x, maxPosition.x);
		const y = MathMethods.clamp(position.y, minPosition.y, maxPosition.y);

		return new Point(x, y);
	}
}