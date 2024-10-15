const { addLeadingZero, formatTime } = require('./app'); 

describe('unit-test', () => {

    test('addLeadingZero должен добавлять начальный ноль для однозначных чисел.', () => {
        expect(addLeadingZero(5)).toBe('05'); 
        expect(addLeadingZero(10)).toBe(10);  
    });

    test('formatTime должен правильно форматировать время в формате чч:мм:сс.мс.', () => {
        expect(formatTime(0)).toBe('00:00:00.000');           
        expect(formatTime(61000)).toBe('00:01:01.000');      
        expect(formatTime(3661000)).toBe('01:01:01.000');     
    });

});
