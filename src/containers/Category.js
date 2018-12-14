import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../containers/_Category.scss';

export default class Category extends Component {
  render() {
    return (
      <>
        <div className="category-div">
          <ul className="category">
            <li className="category__li">
              <Link to="/categories/?category_pk=1">밑반찬</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=2">무침</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=3">나물</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=4">볶음</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=5">조림</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=6">
                    젓갈&middot;장&middot;소스
                  </Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=7">세트</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=8">메인반찬</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=9">고기반찬</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=10">해산물반찬</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=11">분식</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=12">튀김</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=13">
                    전&middot;계란반찬
                  </Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=14">세트</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=15">
                국&middot;찌개&middot;탕
              </Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=16">국</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=17">찌개</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=18">탕</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=19">전골</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=20">세트</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=21">아이반찬</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=22">밑반찬</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=23">메인반찬</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=24">국&middot;찌개</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=25">간식&middot;음료</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=26">육류 구이관</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=27">소고기</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=28">돼지고기</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=29">양념구이</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=30">
                    소스&middot;곁들임찬
                  </Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=31">채소</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=32">마무리식사</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=33">김치&middot;짱아찌</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=34">김치</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=35">
                    장아찌&middot;피클
                  </Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=36">세계음식</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=37">양식</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=38">아시아식</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=39">
                밥&middot;죽&middot;면
              </Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=40">밥</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=41">죽</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=42">면</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=43">샐러드</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=44">샐러드</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=45">샌드위치</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=46">간식</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=47">베이커리</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=48">과일</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=49">주스&middot;음료</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=50">스무디</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=51">
                    유제품&middot;커피
                  </Link>
                </li>
                <li className="sub-category__li">
                  <Link to="categories/?category_pk=52">기타간식</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=53">정기식당</Link>
              <ol className="sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=54">1-2인</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=55">3-4인</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=56">아이반찬</Link>
                </li>
              </ol>
            </li>
            <li className="category__li">
              <Link to="/categories/?category_pk=57">반찬브랜드</Link>
              <ol className="last-sub-category">
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=58">반찬가게</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=59">반찬 장인</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=60">셰프의 요리</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=61">전국맛집</Link>
                </li>
                <li className="sub-category__li">
                  <Link to="/categories/?category_pk=62">키즈관</Link>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
