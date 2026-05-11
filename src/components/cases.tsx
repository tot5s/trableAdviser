
type Props = {
    onSelectCase: (cases: string) => void
}

const caseType: Array<string> = [
    'suitcase',
    'bag',
    'pouch'
]

export function Cases({onSelectCase}:Props) {

    return (
        <div>
            {
                caseType.map((ca) => {
                    return (
                        <button onClick={() => onSelectCase(ca)}>
                            {ca}
                        </button>
                    )
                })
            }
        </div>
    )
}


export default Cases