export default function Greet(): JSX.Element {
    const items: string[] = [
        'Vite',
        'TypeScript',
        'Path Alias',
        'Vitest',
        'Eslint',
        'Prettier',
        'React-Testing Library',
        'Cypress',
    ];
    return (
        <>
            <h3>Setting up</h3>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}
