import { Fragment, memo, useCallback } from 'react';
/*
  Функция makeLog определена внутри MainComponent, она пересоздается каждый ререндер,
  поэтому дочерний компонент всегда получает новую ссылку на функцию 
  предыдущая ссылка на функцию никогда не будет равняться новой ссылке на функцию {} === {} false
  поэтому memo не спасет
  
  есть два варианта решения проблемы, либо вынести makeLog за границы MainComponent,
  либо обернуть makeLog в useCallback чтобы ссылка на фунцию сохранялась 
*/

const MainComponent = () => {
  // решение
	const makeLog = useCallback(() => console.log('hi from MainComponent'), []);

	return (
		<Fragment>
			<ChildComponent makeLog={makeLog} />
		</Fragment>
	);
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
	<button onClick={makeLog}>say Hi from ChildComponent</button>
));

export default MainComponent;
