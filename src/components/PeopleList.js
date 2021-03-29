import React from 'react';
import '../index.css';

const Person=({img,name,job,children})=>{
    //const url=`./photos/${img}.jpg`
    return(
      <article className="person">
          <img src={img} />
          <h4>{name}</h4>
          <h3>Job : {job}</h3>
          {children}
      </article>
    )
  }
  const PeopleList=()=>{
    return(
      <section className="person-list">
          <Person img="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/153134199_1669778919871289_4277705002904034577_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=V7AU15RX8zEAX_nWAm6&_nc_oc=AQkz9YWfPdnUhbdYbW8W_BKJhBNBlwg5ei1Mw4ZvT1SbsU9mhbWpAUvjkNlQBtqAMlk&_nc_ht=scontent.fhdy3-1.fna&oh=1389118b71475aa4ade3679c1a58af90&oe=6086CC71" name="Jatumongkhon Saengphum" job="Programmer">
          <p>Skill : C# JAVA PHP</p>
          </Person>
          <Person img="https://scontent.fhdy3-1.fna.fbcdn.net/v/t31.0-1/p320x320/14902875_1193954937337987_7103799618641628302_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=SqkebywqrSQAX9A75mA&_nc_ht=scontent.fhdy3-1.fna&tp=6&oh=3943a5c8e740d4a673c1c15ae6495384&oe=60851B9F" name="Tannakorn Maneepak" job="Designer">
          <p>Skill : Photoshop , 3D Model</p>
          </Person>
          <Person img="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/84315454_2744835615598828_8077561993067757568_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J__d9vrtJb8AX8fxrlR&_nc_ht=scontent.fhdy3-1.fna&oh=cac549cc59263bd568d421cda0cac0a3&oe=60857327" name="Jirattikal Sillapa" job="Tester">
          <p>Skill : วิเคราะห์และทดสอบระบบ</p>
          </Person>
          <Person img="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/49204587_1949896828442749_7731752821489401856_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fNNRBXGQ3Z8AX9-usTk&_nc_oc=AQkweGz3HZk-_XoHoiyy1b2AwlwQzmKFnY0X0r7eTRYWs51kKodEx3PDfZVwFuz_liI&_nc_ht=scontent.fhdy3-1.fna&oh=5f2a061afd1695f661d5c86af77fd61d&oe=60843CC7" name="Apiwut Damkeaw" job="SA">
          <p>Skill : SA</p>
          </Person>
          <Person img="https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/114825934_2842393509323808_7103027433851866264_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dC60UjIhd-sAX_7kIU5&_nc_ht=scontent.fhdy3-1.fna&oh=7fa3080698f2c7dc303f3409dbb524f2&oe=60859853" name="Chanin Nusang" job="Programmer">
          <p>Skill : C# JAVA PHP</p>
          </Person>
  
      </section>
    )
  }
export default PeopleList;