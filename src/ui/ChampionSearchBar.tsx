export function ChampionSearchBar({
    filterText,
    onFilterTextChange
}: { filterText: string, onFilterTextChange: (newText: string) => void }) {
    return (<form>
        <input type="text" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>);
}