export interface Props {
    total: number;
    pageSize: number;
    page: number;
    onChange: (page: number) => void;
}