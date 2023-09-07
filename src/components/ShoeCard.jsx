/**
 * Function to render a shoe card component
 * 
 * @param {Object} props - The properties passed to the component
 * @param {Object} props.imgURL - The image URLs for the shoe
 * @param {Function} props.changeBigShoeImage - The function to change the big shoe image
 * @param {string} props.bigShoeImg - The URL of the currently displayed big shoe image
 * @returns {React.Node} - The rendered shoe card component
 */
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  /**
   * Event handler for when the shoe card is clicked
   */
  const handleClick = () => {
    console.log('Clicked on shoe card');
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  /**
   * Determines the border class for the shoe card based on the currently displayed big shoe image
   * 
   * @type {string}
   */
  const borderClass = bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent";
  
  /**
   * The class for the shoe card component
   * 
   * @type {string}
   */
  const cardClass = `border-2 rounded-xl ${borderClass} cursor-pointer max-sm:flex-1`;

  console.log('Rendering shoe card');
  return (
    <div className={cardClass} onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};
  
  export default ShoeCard;