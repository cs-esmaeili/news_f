import Card from '@/components/site/Card';

const Location5 = ({ data, sectionTitle }) => {

    const renderCard = (index) => {
        if (data[index]) {
            const { title, disc, imageH, createdAt, category_id } = data[index];
            return (
                <div className='grow  w-full sm:w-1/3  md:w-1/5 relative  h-[320px]' key={index}>
                    <Card title={title} disc={disc} image={imageH.url} blurHash={imageH.blurHash} date={createdAt} category={category_id.name} />
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className='flex my-3'>
                <div className='border-l-4 border-accent_s pr-1'></div>
                <span className='text-xl'>{sectionTitle}</span>
            </div>
            <div className='flex flex-wrap justify-between gap-3'>
                {data.map((value, index) => renderCard(index))}
            </div>
        </>
    );
};

export default Location5;