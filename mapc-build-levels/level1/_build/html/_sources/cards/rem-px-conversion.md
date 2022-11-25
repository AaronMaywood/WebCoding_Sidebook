`````{div} taskcard
````{card} REM⇔px換算について
% {{TODO}}なぜpxを使用しないのかの説明が必要. https://developer.mozilla.org/ja/docs/Web/CSS/font-size に説明がある。
^^^
{{TODO}}
% 1rem = 16px （ブラウザ既定値に相当）
% 
% 40px ... 2.5rem
% 30px ... 1.875rem
% 24px ... 1.5rem
% 20px ... 1.25rem
% 16px ... 1rem
% 
% 
% MEMO 1rem=16pxの時、1pxは何rem?→まあ、1/16remなんだけど
% 	16(px):1(rem) = 1(px):x(rem)
% 
% 	1(px)(rem) = 16(px)*x(rem)
% 	x(rem) = 1(px)(rem) / 16(px)
% 	x(rem) = 1(rem) / 16
% 	x(rem) = 1/16 (rem)
% 	x(rem) = 0.0625(rem)
% 	↑ここx(px)じゃないと変じゃないかな？まあいいや
% 
% pxを指定してremを得る式
% 	rem = calc((1 / 16) * px)
% 
% 30px を調べたければ、
% 	calc((1/16)*30) = 1.875rem
````
`````
