#!/bin/sh

BFLOOP=../bfloop

echo "TWO-TO-THE-THREE-TO-THE"
$BFLOOP two-to-the-three-to-the.bloop - <<EOF
TWO-TO-THE-THREE-TO-THE [0].
TWO-TO-THE-THREE-TO-THE [1].
TWO-TO-THE-THREE-TO-THE [2].
TWO-TO-THE-THREE-TO-THE [3].
TWO-TO-THE-THREE-TO-THE [4].
TWO-TO-THE-THREE-TO-THE [5].
TWO-TO-THE-THREE-TO-THE [6].
EOF

echo "GOLDBACH?"
$BFLOOP minus.bloop remainder.bloop prime?.bloop goldbach?.bloop - <<EOF
GOLDBACH? [0].
GOLDBACH? [1].
GOLDBACH? [2].
GOLDBACH? [3].
GOLDBACH? [4].
GOLDBACH? [5].
GOLDBACH? [6].
GOLDBACH? [7].
GOLDBACH? [8].
GOLDBACH? [9].
GOLDBACH? [10].
EOF

echo "WONDROUS?"
$BFLOOP minus.bloop remainder.bloop divide.bloop wondrous?.floop - <<EOF
WONDROUS? [0].
WONDROUS? [1].
WONDROUS? [2].
WONDROUS? [3].
WONDROUS? [4].
WONDROUS? [5].
WONDROUS? [6].
WONDROUS? [15].
WONDROUS? [27].
EOF

echo "FACTORIAL"
$BFLOOP factorial.bloop - <<EOF
FACTORIAL [0].
FACTORIAL [1].
FACTORIAL [2].
FACTORIAL [3].
FACTORIAL [4].
FACTORIAL [10].
FACTORIAL [20].
FACTORIAL [30].
EOF

echo "REMAINDER"
$BFLOOP minus.bloop remainder.bloop - <<EOF
REMAINDER [0,0].
REMAINDER [5,0].
REMAINDER [5,5].
REMAINDER [24,7].
REMAINDER [7,24].
EOF

echo "FIBO"
$BFLOOP fibo.bloop - <<EOF
FIBO [0].
FIBO [1].
FIBO [2].
FIBO [3].
FIBO [4].
FIBO [5].
FIBO [6].
FIBO [7].
FIBO [8].
FIBO [9].
FIBO [10].
EOF

echo "PRIME-BEYOND"
$BFLOOP minus.bloop remainder.bloop prime?.bloop prime-beyond.bloop - <<EOF
PRIME-BEYOND [1].
PRIME-BEYOND [2].
PRIME-BEYOND [3].
PRIME-BEYOND [4].
PRIME-BEYOND [5].
PRIME-BEYOND [6].
PRIME-BEYOND [7].
PRIME-BEYOND [8].
PRIME-BEYOND [9].
PRIME-BEYOND [33].
PRIME-BEYOND [113].
EOF

echo "PERFECT"
$BFLOOP minus.bloop remainder.bloop perfect?.bloop perfect.floop - <<EOF
PERFECT [1].
PERFECT [2].
EOF

echo "PRIME?"
$BFLOOP minus.bloop remainder.bloop prime?.bloop - <<EOF
PRIME? [0].
PRIME? [1].
PRIME? [2].
PRIME? [3].
PRIME? [4].
PRIME? [5].
PRIME? [6].
PRIME? [7].
PRIME? [8].
PRIME? [9].
PRIME? [10].
PRIME? [11].
EOF

echo "PERFECT?"
$BFLOOP minus.bloop remainder.bloop perfect?.bloop - <<EOF
PERFECT? [4].
PERFECT? [5].
PERFECT? [6].
PERFECT? [7].
PERFECT? [8].
PERFECT? [26].
PERFECT? [27].
PERFECT? [28].
PERFECT? [29].
PERFECT? [30].
EOF

echo "TRIVIAL?"
$BFLOOP power.bloop trivial?.bloop - <<EOF
TRIVIAL? [3,4,5,2].
TRIVIAL? [3,4,5,3].
EOF

echo "PIERRE?"
$BFLOOP power.bloop trivial?.bloop pierre?.bloop - <<EOF
PIERRE? [3,4,5].
PIERRE? [1,2,3].
EOF

echo "FERMAT?"
$BFLOOP fermat?.bloop - <<EOF
FERMAT? [0].
FERMAT? [1].
FERMAT? [2].
FERMAT? [3].
EOF

echo "TORTOISE-PAIR?"
$BFLOOP minus.bloop remainder.bloop prime?.bloop tortoise-pair?.bloop - <<EOF
TORTOISE-PAIR? [5,1742].
TORTOISE-PAIR? [5,100].
EOF

echo "TORTOISE?"
$BFLOOP minus.bloop remainder.bloop prime?.bloop prime-beyond.bloop tortoise-pair?.bloop tortoise?.floop - <<EOF
TORTOISE? [1742].
TORTOISE? [7].
EOF

echo "MIU-WELL-FORMED?"
$BFLOOP minus.bloop remainder.bloop divide.bloop miu-well-formed?.bloop - <<EOF
MIU-WELL-FORMED? [310].
MIU-WELL-FORMED? [415].
EOF

echo "MIU-PROOF-PAIR?"
$BFLOOP minus.bloop remainder.bloop divide.bloop miu-proof-pair?.bloop - <<EOF
MIU-PROOF-PAIR? [0,0].
MIU-PROOF-PAIR? [31,31].
MIU-PROOF-PAIR? [310,310].
MIU-PROOF-PAIR? [31310,310].
MIU-PROOF-PAIR? [31311,311].
MIU-PROOF-PAIR? [311130,30].
EOF

echo "PI-DIGIT"
$BFLOOP minus.bloop remainder.bloop divide.bloop prime?.bloop power.bloop pi-digit.bloop - <<EOF
PI-DIGIT [1].
PI-DIGIT [2].
PI-DIGIT [3].
PI-DIGIT [4].
PI-DIGIT [5].
PI-DIGIT [6].
PI-DIGIT [7].
PI-DIGIT [8].
PI-DIGIT [9].
PI-DIGIT [10].
EOF
