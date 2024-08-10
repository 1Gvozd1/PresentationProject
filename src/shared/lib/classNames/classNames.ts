type Mods = Record<string, boolean | string> // Record - специальный класс(тип), который указывает что в качестве ключа string а в качестве значения bool или string (объект с ограниченным количеством значений)

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string { // функция для более удобного комбинирования классов, особенно если они навешиваются по какому-то условию classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['withPadding']) => 'remove-btn hovered selectable withPadding'
    return [
        className,
        ...additional.filter(Boolean), // так как могут прилетать undefined
        ...Object.entries(mods)
        .filter(([, value]) => !!value)
        .map(([className]) => className)
    ]
        .join(' ')
}

