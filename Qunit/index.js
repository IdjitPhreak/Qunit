function square(a) {
	return a*a;
	}
function multiply(a, b) {
	return a*b;
	}
function Add(a,b) {
	return a+b;
	}
function subtract(a,b) {
	return a-b;
	}

	test("Test01", function() {
		ok(true, true);
	});

	test("TestSquare", function() {
		var expected = 25;
		var actual = square(5);
		equal(actual, expected, "blah bla"+ expected);
	});

	test("TestMultiply", function() {
		var expected = 24;
		var actual = multiply(3,8);
		equal(actual,expected, "blah bla"+ expected);
	});
	test("TestAdd", function() {
		var expected = 11;
		var actual = Add(3,8);
		equal(actual,expected, "blah bla"+ expected);
	});
	test("TestSubtract", function() {
		var expected = -5;
		var actual = subtract(3,8);
		equal(actual,expected, "blah bla"+ expected);
	});