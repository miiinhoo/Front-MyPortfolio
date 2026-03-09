import { useState } from "react"

export default function usePagenation(items,perPage,groupSize = 9) {

    // 페이지 초기값 설정
    const [ page, setPage ] = useState(1);

    // 총 페이지 수 계산
    const totalPages = Math.max(0 , Math.ceil(items.length / perPage));

    // 현재 페이지네이션 계산
    const currentGroup = Math.ceil( page / groupSize );

    const startPage = (currentGroup - 1) * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, totalPages);

    const pageNumbers = [];

    for(let i = startPage; i <= endPage; i++){
        pageNumbers.push(i);
    }

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const pageItems = items.slice(start,end);

    const hasPrevGroup = currentGroup > 1;
    const hasNextGroup = endPage < totalPages;

    const goPrev = () => {
        if(!hasPrevGroup) return;
        setPage(startPage - groupSize);
    }
    const goNext = () => {
        if(!hasNextGroup) return;
        setPage(endPage + 1);
    }

    return{
        page,
        setPage,

        totalPages,

        pageNumbers,

        pageItems,

        hasPrevGroup,
        hasNextGroup,
        goPrev,
        goNext,
    }
}