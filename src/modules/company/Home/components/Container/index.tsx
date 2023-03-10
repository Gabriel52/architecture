import { Table } from "../Table"
import { useContainer } from "./useContainer"

export const Container = () => {
    const { value, hardFunction } = useContainer()
    return (
        <>
            <h2>Container Component</h2>
            <button
                onClick={hardFunction}
            ></button>
            <Table firstItem={0} secondItem="Teste" />
        </>
    )
}