import Widgets from '../Widgets/Widgets';
import Promo from '../Promo/Promo';
import Search from '../Search/Search';
import NewsList from '../News/NewsList';
import './page.css';

function Page() {
  return (
    <div className="page">
      <div>
        <NewsList />
      </div>

      <div>
        <Search />
      </div>

      <div>
        <Promo
          img={
            'https://ifish2.ru/wp-content/uploads/skolko-mojno-zarabotat-na-sajt9.jpg'
          }
        />
      </div>

      <div>
        <Widgets />
      </div>
    </div>
  );
}

export default Page;
