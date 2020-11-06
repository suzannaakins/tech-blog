const { format_date, format_plural } = require('../utils/helpers');

test('format_date() returns a nice, readable date string', () => {
    const date = new Date('2020-05-28 16:12:03');

    expect(format_date(date)).toBe('5/28/2020');
})

test('format_plural() correctly pluralizes words', () => {
    expect(format_plural("Tiger", 2)).toBe("Tigers");
    expect(format_plural("Lion", 1)).toBe("Lion");
})