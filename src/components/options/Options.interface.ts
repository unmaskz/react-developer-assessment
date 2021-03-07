export interface Props {
    categories: string[];
    filter: string;
    changeCategoryFilter: (category: string) => void;
}