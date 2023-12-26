// components/ComicList.js
import React from 'react';
import Link from 'next/link';

const ComicList = () => {
    const comics = [
        { id: 1, title: 'Truyện 1', category: 'action', slug: 'truyen-1' },
        { id: 2, title: 'Truyện 2', category: 'kiem-hiep', slug: 'truyen-2' },
        // Thêm các truyện khác vào đây
    ];

    return (
        <ul>
            {comics.map((comic) => (
                <li key={comic.id}>
                    <Link href={`/categories/${comic.category}/${comic.slug}`}>
                        {comic.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ComicList;
