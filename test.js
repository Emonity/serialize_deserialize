const serialize = (num) => {
    if (Array.isArray(num)) {
        let result = "";
        for (let number of num) {
            result += String.fromCharCode(Math.floor(number / 256)) + String.fromCharCode(number % 256);
        }
        return result;
    } else {
        return false;
    }
}
const deserialize = (serializedNum) => {
    let numbers = [];
    for (let i = 0; i < serializedNum.length; i += 2) {
        let num = serializedNum.charCodeAt(i) * 256 + serializedNum.charCodeAt(i + 1);
        numbers.push(num);
    }
    return numbers;
}

// Набор тестов
let tests = [
    [1, 2, 3, 4, 5],
    [100, 200, 150, 300, 250],
    Array.from({length: 50}, (_, i) => i + 1),
    Array.from({length: 100}, (_, i) => i + 1),
    Array.from({length: 500}, (_, i) => i + 1),
    Array.from({length: 1000}, (_, i) => i + 1),
    Array.from({length: 1000}, () => 1),
    Array.from({length: 100}, () => 10),
    Array.from({length: 10}, () => 100),
    Array.from({length: 300}, (_, i) => (i % 3 === 0 ? i + 1 : i))
];

// Тестирование и вывод результатов
tests.forEach(test => {
    let serialized = serialize(test);
    let deserialized = deserialize(serialized);
    let compressionRatio = serialized.length / (test.length * 2);

    console.log(`Исходный массив: ${test}`);
    console.log(`Сериализованная строка: ${serialized}`);
    console.log(`Десериализованный массив: ${deserialized}`);
    console.log(`Коэффициент сжатия: ${compressionRatio}`);
});